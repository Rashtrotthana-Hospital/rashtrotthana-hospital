/**
 * Donate button click logger for the Rashtrotthana Hospital website.
 *
 * SETUP
 *  1. Create a Google Sheet (any name) - this is where clicks are stored.
 *  2. In that Sheet: Extensions > Apps Script. Delete the sample code and
 *     paste this whole file in. Save.
 *  3. Deploy > New deployment > type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     Deploy, then copy the Web app URL (it ends with /exec).
 *  4. Paste that URL into src/environment.ts as donationClickLogUrl.
 *
 * Two tabs are created automatically:
 *   "Clicks"        - one row per click, with IP, location, device, referrer.
 *   "Daily Summary" - clicks per day per button, so daily totals need no formula.
 *
 * NOTE: after editing this script you must run Deploy > Manage deployments and
 * update the existing deployment, otherwise the live URL keeps the old code.
 */

var CLICK_SHEET = 'Clicks';
var SUMMARY_SHEET = 'Daily Summary';

var CLICK_HEADERS = [
  'Date', 'Time', 'Timestamp', 'Button', 'Page URL',
  'IP', 'City', 'Region', 'Country', 'Visitor ID', 'Device / Browser', 'Referrer'
];

var SUMMARY_HEADERS = ['Date', 'Button', 'Clicks', 'Unique Visitors', 'Unique IPs'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var clicks = getSheet_(ss, CLICK_SHEET, CLICK_HEADERS);
    clicks.appendRow([
      data.date || '',
      data.time || '',
      data.timestamp || '',
      data.source || '',
      data.pageUrl || '',
      data.ip || '',
      data.city || '',
      data.region || '',
      data.country || '',
      data.visitorId || '',
      data.userAgent || '',
      data.referrer || ''
    ]);

    rebuildSummary_(ss);

    return jsonOut_({ status: 'ok' });
  } catch (err) {
    return jsonOut_({ status: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Opening the web app URL in a browser shows this, handy to confirm it is live. */
function doGet() {
  return jsonOut_({ status: 'ok', message: 'Donation click logger is running' });
}

function getSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** Recounts per day per button from the Clicks tab. */
function rebuildSummary_(ss) {
  var clicks = getSheet_(ss, CLICK_SHEET, CLICK_HEADERS);
  var lastRow = clicks.getLastRow();
  if (lastRow < 2) {
    return;
  }

  var rows = clicks.getRange(2, 1, lastRow - 1, CLICK_HEADERS.length).getValues();
  var totals = {};

  rows.forEach(function (row) {
    var date = row[0];
    var button = row[3];
    var ip = row[5];
    var visitor = row[9];
    var key = date + '||' + button;

    if (!totals[key]) {
      totals[key] = { date: date, button: button, clicks: 0, visitors: {}, ips: {} };
    }
    totals[key].clicks++;
    if (visitor) { totals[key].visitors[visitor] = true; }
    if (ip) { totals[key].ips[ip] = true; }
  });

  var out = Object.keys(totals).map(function (key) {
    var t = totals[key];
    return [t.date, t.button, t.clicks, Object.keys(t.visitors).length, Object.keys(t.ips).length];
  });

  var summary = getSheet_(ss, SUMMARY_SHEET, SUMMARY_HEADERS);
  if (summary.getLastRow() > 1) {
    summary.getRange(2, 1, summary.getLastRow() - 1, SUMMARY_HEADERS.length).clearContent();
  }
  if (out.length) {
    summary.getRange(2, 1, out.length, SUMMARY_HEADERS.length).setValues(out);
  }
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
