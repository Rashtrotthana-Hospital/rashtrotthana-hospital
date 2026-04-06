// src/app/seo/schema-map.ts

import { HOME_SCHEMA } from "./schema/home.schema";


// -----------------------------
// SURGERY SCHEMAS
// -----------------------------

import { ACL_SCHEMA } from "./schema/acl-reconstruction.schema";
import { TKR_SCHEMA } from "./schema/tkr.schema";
import { GALLSTONE_SCHEMA } from "./schema/gallstone.schema";
import { HERNIA_SCHEMA } from "./schema/hernia.schema";
import { HYSTERECTOMY_SCHEMA } from "./schema/hysterectomy.schema";
import { TONSILLECTOMY_SCHEMA } from "./schema/tonsillectomy.schema";
import { ADENOIDECTOMY_SCHEMA } from "./schema/adenoidectomy.schema";
import { PILES_SCHEMA } from "./schema/piles.schema";
import { MATERNITY_SCHEMA } from "./schema/maternity.schema";
import { KIDNEY_STONE_SCHEMA } from "./schema/kidney-stone.schema";


// -----------------------------
// SPECIALITY SCHEMAS
// -----------------------------

import { GYNECOLOGY_SCHEMA } from "./schema/gynecology.schema";
import { ENT_SCHEMAS } from "./schema/ent.schema";
import { NEPHROLOGY_SCHEMA } from "./schema/nephrology.schema";
import { ORTHOPEDIC_SCHEMA } from "./schema/orthopedic.schema";
import { PULMONOLOGY_SCHEMA } from "./schema/pulmonology.schema";
import { UROLOGY_SCHEMA } from "./schema/urology.schema";
import { INTERNAL_MEDICINE_SCHEMA } from "./schema/internal-medicine.schema";
import { PAEDIATRICS_SCHEMA } from "./schema/paediatrics.schema";
import { GASTROENTEROLOGY_SCHEMA } from "./schema/gastroenterology.schema";
import { CARDIOLOGY_SCHEMA } from "./schema/cardiology.schema";
import { OPHTHALMOLOGY_SCHEMA } from "./schema/ophthalmology.schema";
import { DENTAL_SCHEMA } from "./schema/dental-sciences.schema";
import { NEUROSCIENCES_SCHEMA } from "./schema/neurosciences.schema";
import { ENDOCRINOLOGY_SCHEMA } from "./schema/endocrinology.schema";
import { PSYCHIATRY_SCHEMA } from "./schema/psychiatry.schema";
import { ONCOLOGY_SCHEMA } from "./schema/oncology.schema";
import { ANESTHESIOLOGY_SCHEMA } from "./schema/anesthesiology.schema";
import { EMERGENCY_MEDICINE_SCHEMA } from "./schema/emergency-medicine.schema";
import { RHEUMATOLOGY_SCHEMA } from "./schema/rheumatology.schema";
import { VASCULAR_SURGERY_SCHEMA } from "./schema/vascular-surgery.schema";


// -----------------------------
// DOCTOR SCHEMAS
// -----------------------------

import { DR_ANAND_SHANKAR_SCHEMA } from "./schema/doctor-schema/dr-anand-shankar.schema";
import { DR_ASHWITHA_GUNDMI_SCHEMA } from "./schema/doctor-schema/dr-ashwitha-gundmi.schema";
import { DR_ATMARAM_DC_SCHEMA } from "./schema/doctor-schema/dr-atmaram-d-c.schema";
import { DR_GEETHANJALI_KG_SCHEMA } from "./schema/doctor-schema/dr-geethanjali-k-g.schema";
import { DR_HM_KRISHNAMURTHY_SCHEMA } from "./schema/doctor-schema/dr-h-m-krishnamurthy.schema";
import { DR_SHYLA_SCHEMA } from "./schema/doctor-schema/dr-h-n-shyla.schema";
import { DR_JAIDEV_S_SCHEMA } from "./schema/doctor-schema/dr-jaidev-s.schema";
import { DR_KOLLA_VINOD_SCHEMA } from "./schema/doctor-schema/dr-kolla-vinod.schema";
import { DR_LATHA_VENKATARAM_SCHEMA } from "./schema/doctor-schema/dr-latha-venkataram.schema";
import { DR_MADHU_SN_SCHEMA } from "./schema/doctor-schema/dr-madhu-s-n.schema";
import { DR_MAHESH_KULKARNI_SCHEMA } from "./schema/doctor-schema/dr-mahesh-kulkarni.schema";
import { DR_MANASA_NA_SCHEMA } from "./schema/doctor-schema/dr-manasa-n-a.schema";
import { DR_MEENA_HB_SCHEMA } from "./schema/doctor-schema/dr-meena-h-b.schema";
import { DR_NAGARAJ_RAO_SCHEMA } from "./schema/doctor-schema/dr-nagaraj-rao.schema";
import { DR_NIKHIL_HEGDE_SCHEMA } from "./schema/doctor-schema/dr-nikhil-hegde.schema";
import { DR_NISHANTH_LAKSHMIKANTHA_SCHEMA } from "./schema/doctor-schema/dr-nishanth-lakshmikantha.schema";
import { DR_PRAKRUTHI_SCHEMA } from "./schema/doctor-schema/dr-prakruthi.schema";
import { DR_PRAMOD_CHINDER_SCHEMA } from "./schema/doctor-schema/dr-pramod-s-chinder.schema";
import { DR_RAVI_T_SCHEMA } from "./schema/doctor-schema/dr-ravi-t.schema";
import { DR_SAMEER_M_HALAGERI_SCHEMA } from "./schema/doctor-schema/dr-sameer-m-halageri.schema";
import { DR_SHEKAR_PATIL_SCHEMA } from "./schema/doctor-schema/dr-shekar-patil.schema";
import { DR_SOWMYA_BHAT_SCHEMA } from "./schema/doctor-schema/dr-sowmya-s-bhat.schema";
import { DR_SUJAYENDRA_DM_SCHEMA } from "./schema/doctor-schema/dr-sujayendra-d-m.schema";
import { DR_VISHNUVARDHAN_V_SCHEMA } from "./schema/doctor-schema/dr-vishnuvardhan-v.schema";



export const SCHEMA_MAP: any = {

  // -----------------------------
  // HOME
  // -----------------------------

  '/': HOME_SCHEMA,


  // -----------------------------
  // SURGERIES
  // -----------------------------

  '/acl-reconstruction-surgery-bangalore': ACL_SCHEMA,
  '/total-knee-replacement-bangalore': TKR_SCHEMA,
  '/gallstone-removal-surgery-bangalore': GALLSTONE_SCHEMA,
  '/hernia-hospital-bangalore': HERNIA_SCHEMA,
  '/hysterectomy-surgery-bangalore': HYSTERECTOMY_SCHEMA,
  '/tonsillectomy-surgery-bangalore': TONSILLECTOMY_SCHEMA,
  '/adenoidectomy-surgery-bangalore': ADENOIDECTOMY_SCHEMA,
  '/piles-hospital-bangalore': PILES_SCHEMA,
  '/maternity-care-bangalore': MATERNITY_SCHEMA,
  '/kidney-stone-surgery-bangalore': KIDNEY_STONE_SCHEMA,

  // -----------------------------
  // SPECIALITIES
  // -----------------------------

  '/specialities/best-obstetrics-and-gynecologist-hospital-in-bangalore': GYNECOLOGY_SCHEMA,
  '/specialities/best-ent-hospital-in-bangalore': ENT_SCHEMAS,
  '/specialities/best-nephrology-hospital-in-bangalore': NEPHROLOGY_SCHEMA,
  '/specialities/best-orthopaedics-hospital-in-bangalore': ORTHOPEDIC_SCHEMA,
  '/specialities/best-pulmonology-hospital-in-bangalore': PULMONOLOGY_SCHEMA,
  '/specialities/best-urology-hospital-in-bangalore': UROLOGY_SCHEMA,
  '/specialities/internal-medicine-hospital-in-bangalore': INTERNAL_MEDICINE_SCHEMA,
  '/specialities/best-paediatric-hospital-in-bangalore': PAEDIATRICS_SCHEMA,
  '/specialities/best-gastroenterology-hospital-in-bangalore': GASTROENTEROLOGY_SCHEMA,
  '/specialities/best-cardiology-hospital-in-bangalore': CARDIOLOGY_SCHEMA,
  '/specialities/best-eye-hospital-in-bangalore': OPHTHALMOLOGY_SCHEMA,
  '/specialities/best-dental-hospital-in-bangalore': DENTAL_SCHEMA,
  '/specialities/best-neurology-hospital-in-bangalore': NEUROSCIENCES_SCHEMA,
  '/specialities/best-endocrinology-hospital-in-bangalore': ENDOCRINOLOGY_SCHEMA,
  '/specialities/best-pshychiatry-hospital-in-bangalore': PSYCHIATRY_SCHEMA,
  '/specialities/best-oncology-hospital-in-bangalore': ONCOLOGY_SCHEMA,
  '/specialities/best-anesthesiology-hospital-in-india': ANESTHESIOLOGY_SCHEMA,
  '/specialities/best-emergency-medicine-hospital-in-bangalore': EMERGENCY_MEDICINE_SCHEMA,
  '/specialities/rheumatology-hospital-bangalore': RHEUMATOLOGY_SCHEMA,
  '/specialities/best-vascular-surgery-hospital-in-bangalore': VASCULAR_SURGERY_SCHEMA,


  // -----------------------------
  // DOCTORS
  // -----------------------------

  '/doctor/dr-anand-shankar-k': DR_ANAND_SHANKAR_SCHEMA,
  '/doctor/dr-ashwitha-gundmi': DR_ASHWITHA_GUNDMI_SCHEMA,
  '/doctor/dr-atmaram-d-c': DR_ATMARAM_DC_SCHEMA,
  '/doctor/dr-geethanjali-k-g': DR_GEETHANJALI_KG_SCHEMA,
  '/doctor/dr-h-m-krishnamurthy': DR_HM_KRISHNAMURTHY_SCHEMA,
  '/doctor/dr-h-n-shyla': DR_SHYLA_SCHEMA,
  '/doctor/dr-jaidev-s': DR_JAIDEV_S_SCHEMA,
  '/doctor/dr-kolla-vinod': DR_KOLLA_VINOD_SCHEMA,
  '/doctor/dr-latha-venkataram': DR_LATHA_VENKATARAM_SCHEMA,
  '/doctor/dr-madhu-s-n': DR_MADHU_SN_SCHEMA,
  '/doctor/dr-mahesh-kulkarni': DR_MAHESH_KULKARNI_SCHEMA,
  '/doctor/dr-manasa-n-a': DR_MANASA_NA_SCHEMA,
  '/doctor/dr-meena-h-b': DR_MEENA_HB_SCHEMA,
  '/doctor/dr-nagaraj-rao': DR_NAGARAJ_RAO_SCHEMA,
  '/doctor/dr-nikhil-hegde': DR_NIKHIL_HEGDE_SCHEMA,
  '/doctor/dr-nishanth-lakshmikantha': DR_NISHANTH_LAKSHMIKANTHA_SCHEMA,
  '/doctor/dr-prakruthi': DR_PRAKRUTHI_SCHEMA,
  '/doctor/dr-pramod-s-chinder': DR_PRAMOD_CHINDER_SCHEMA,
  '/doctor/dr-ravi-t': DR_RAVI_T_SCHEMA,
  '/doctor/dr-sameer-m-halageri': DR_SAMEER_M_HALAGERI_SCHEMA,
  '/doctor/dr-shekar-patil': DR_SHEKAR_PATIL_SCHEMA,
  '/doctor/dr-sowmya-s-bhat': DR_SOWMYA_BHAT_SCHEMA,
  '/doctor/dr-sujayendra-d-m': DR_SUJAYENDRA_DM_SCHEMA,
  '/doctor/dr-vishnuvardhan-v': DR_VISHNUVARDHAN_V_SCHEMA,

};