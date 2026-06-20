import { Component, signal, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface KanbanItem { n: string; t: string; d: string; }
interface KanbanCol {
  label: string;
  colIcon: string;
  bg: string; headBg: string; iconBg: string; iconColor: string; labelColor: string;
  countBg: string; countColor: string; cardBorder: string; numBg: string; numColor: string;
  items: KanbanItem[];
}
interface KanbanSection {
  icon: string; img: string; tag: string; title: string; desc: string;
  headingsOnly?: boolean;
  hideColHead?: boolean;
  cols: KanbanCol[];
}

@Component({
  selector: 'app-wellness-handbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wellness-handbook.component.html',
  styleUrl: './wellness-handbook.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WellnessHandbookComponent {

  readonly current = signal(0);

  readonly sections: KanbanSection[] = [
    {
      icon: 'sun', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=160&h=160&fit=crop', tag: 'Daily regimen',
      title: 'Dinacharya (Daily Regimen)',
      desc: 'Structured daily routines for health and vitality',
      hideColHead: true,
      cols: [
        {
          label: 'Daily routine', colIcon: 'sunrise', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#dcfce7', numColor: '#15803d',
          items: [
            { n: '1',  t: 'Pratarutthana',               d: 'Waking up before sunrise (Brahma Muhurta)' },
            { n: '2',  t: 'Mala Mutra Visarjana',         d: 'Timely evacuation of bladder and bowels' },
            { n: '3',  t: 'Dantdhavana & Jihvanirlekana', d: 'Oral hygiene — herbal brushing & tongue scraping' },
            { n: '4',  t: 'Ushapana',                     d: 'Drinking one glass of water on empty stomach' },
            { n: '5',  t: 'Anjana and Nasya',             d: 'Herbal collyrium to eyes; medicated nasal drops' },
            { n: '6',  t: 'Kavala & Gandusha',            d: 'Oral Detox — swishing herbal oil in the mouth' },
            { n: '7',  t: 'Abhyanga and Udvarthana',      d: 'Oil application on the body before bath' },
            { n: '8',  t: 'Vyayama and Yogasana',         d: 'Stretching and physical exercise after oil massage' },
            { n: '9',  t: 'Snana',                        d: 'Bathing with warm water using herbal powders' },
            { n: '10', t: 'Prarthana',                    d: 'Offering prayers to the Almighty' },
            { n: '11', t: 'Bhojana',                      d: 'Eat only when truly hungry; home-cooked traditional meals' },
            { n: '12', t: 'Tambula sevana',               d: 'Chewing betel leaf preparation' },
            { n: '13', t: 'Dhoomapana',                   d: 'Inhalation of medicated smoke from nose or mouth' },
            { n: '14', t: 'Padabhyanga',                  d: 'Massaging feet with ghee or sesame oil before bedtime' },
            { n: '15', t: 'Nidra',                        d: 'Sleep — healthy sleep guidelines' },
          ],
        },
      ],
    },
    {
      icon: 'seasons', img: 'assets/swastya-page/swsthyabharathi-logo.png', tag: 'Ritucharya',
      title: 'Ritucharya (Seasonal Regimen)',
      desc: 'Ayurvedic seasonal regimen — six seasons across two solstice periods',
      cols: [
        {
          label: 'Uttarayana', colIcon: 'sun', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '1', t: 'Shishira Ritu', d: 'Late winter — cold and dry; strengthen agni with warm, nourishing foods' },
            { n: '2', t: 'Vasanta Ritu', d: 'Spring — kapha accumulates; favour light, bitter, pungent foods' },
            { n: '3', t: 'Grishma Ritu', d: 'Summer — intense heat; favour cool, sweet, liquid-rich foods' },
          ],
        },
        {
          label: 'Dakshinayana', colIcon: 'cloud', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
          labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
          cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
          items: [
            { n: '4', t: 'Varsha Ritu', d: 'Rainy season — vata aggravates; favour sour, salty, easily digestible foods' },
            { n: '5', t: 'Sharad Ritu', d: 'Autumn — pitta flares; favour sweet, bitter, cooling foods' },
            { n: '6', t: 'Hemanta Ritu', d: 'Early winter — agni strongest; favour unctuous, heavy, nourishing foods' },
          ],
        },
      ],
    },
    // {
    //   icon: 'snowflake', img: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=160&h=160&fit=crop', tag: 'Late winter',
    //   title: 'Shishira Ritu (Late Winter)',
    //   desc: 'Seasonal foods and practices for late winter',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Sour-taste foods',         d: 'Cereals, pulses, wheat, corn' },
    //         { n: '✓', t: 'Ginger, garlic, haritaki', d: 'Pippali, sugarcane, milk products' },
    //         { n: '✓', t: 'New rice and corn',         d: 'Wheat and gram flour products' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Pungent, bitter foods', d: 'Astringent taste foods' },
    //         { n: '✗', t: 'Light foods',            d: 'Cold foods' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Oil or paste massage',  d: 'Lukewarm bath; sunlight exposure; warm clothing' },
    //         { n: '✗', t: 'Avoid cold wind',        d: 'Excessive walking and exercise; late-night sleep; travelling' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'tree', img: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=160&h=160&fit=crop', tag: 'Spring',
    //   title: 'Vasanta Ritu (Spring)',
    //   desc: 'Seasonal foods and practices for spring',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Easily digestible foods',  d: 'Old barley, wheat, rice, lentil' },
    //         { n: '✓', t: 'Mudga (green gram)',        d: 'Bitter, pungent, and astringent foods' },
    //         { n: '✓', t: 'Honey',                    d: 'Easily digestible meat' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Hard-to-digest foods', d: 'Cold, heavy, oily, sour, sweet foods' },
    //         { n: '✗', t: 'New grains',            d: 'Curd, cold drinks' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Warm water bath',  d: 'Regular exercise, Udvartana, Kavala, Dhooma, Anjana' },
    //         { n: '✗', t: 'Day sleep',         d: 'To be avoided during spring season' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'sun', img: 'assets/swastya-page/maharashtra-times.avif', tag: 'Summer',
    //   title: 'Grishma Ritu (Summer)',
    //   desc: 'Seasonal foods and practices for summer',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Light, sweet-tasting foods', d: 'Rice, lentils, cold water, buttermilk' },
    //         { n: '✓', t: 'Fruit juices',               d: 'Mango juice, churned buttermilk with pepper' },
    //         { n: '✓', t: 'Meat soups, milk',           d: 'Light and easily digestible' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Salty, pungent, sour foods', d: 'Hot and warm foods' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Cool places; sandalwood paste', d: 'Light clothing; daytime sleep; moonlight at night' },
    //         { n: '✗', t: 'Excessive exercise',            d: 'Hard physical work; alcohol consumption' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'cloud', img: 'assets/swastya-page/images.jpeg', tag: 'Rainy season',
    //   title: 'Varsha Ritu (Rainy Season)',
    //   desc: 'Seasonal foods and practices for the monsoon',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Sour and salty foods',     d: 'Old barley, rice, wheat' },
    //         { n: '✓', t: 'Meat and vegetable soups', d: 'Boiled or medicated drinking water' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'River water; excessive liquid', d: 'Wine and alcoholic beverages' },
    //         { n: '✗', t: 'Heavy meats',                  d: 'Fried and processed foods' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Boiled water bath; oil rub after bath', d: 'Traditional Abyanga; aromatic herbs' },
    //         { n: '✗', t: 'Getting wet in rain; day sleep',        d: 'Hard exercise; staying at river-bank' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'wind', img: 'assets/swastya-page/Sharat-Ritu.jpeg', tag: 'Autumn',
    //   title: 'Sharat Ritu (Autumn)',
    //   desc: 'Seasonal foods and practices for autumn',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Sweet and bitter-tasting foods', d: 'Light and cooling; wheat, green gram' },
    //         { n: '✓', t: 'Sugar candy, honey',             d: 'Pointed gourd; meat of dry land animals' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Hot foods; fatty foods and oils', d: 'Meat of aquatic animals; curds' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Sun- and moon-purified water', d: 'Sandalwood paste; moonlight in early night' },
    //         { n: '✗', t: 'Day sleep; excessive eating',  d: 'Excess sun exposure' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'flame', img: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=160&h=160&fit=crop', tag: 'Early winter',
    //   title: 'Hemanta Ritu (Early Winter)',
    //   desc: 'Seasonal foods and practices for early winter',
    //   cols: [
    //     {
    //       label: 'Recommended foods', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Unctuous, sweet, sour, salty foods', d: 'New rice, green and black gram' },
    //         { n: '✓', t: 'Various meats, oils, fats',          d: 'Milk products, sugarcane, fermented prep, sesame' },
    //       ],
    //     },
    //     {
    //       label: 'Foods to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Light, cold, dry foods', d: 'Cold drinks' },
    //       ],
    //     },
    //     {
    //       label: 'Practices', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Regular exercise; body and head massage', d: 'Warm bath; sunbathing; aromatic substances' },
    //         { n: '✗', t: 'Strong cold wind exposure',              d: 'Day sleep' },
    //       ],
    //     },
    //   ],
    // },
    {
      icon: 'bowl', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=160&h=160&fit=crop', tag: 'Food',
      title: 'Ahara (Food) — guidelines for healthy eating',
      desc: 'Food as the foundation of physical, mental, and spiritual well-being',
      cols: [
        {
          label: 'What to eat', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
          items: [
            { n: '1',  t: 'Choose food by season and health', d: 'Season, time of day, age, digestion strength' },
            { n: '2',  t: 'Eat freshly prepared food',        d: 'Freshly cooked and warm; avoid stale or reheated' },
            { n: '5',  t: 'Respect regional staples',         d: 'Prefer unpolished, locally grown grains' },
            { n: '6',  t: 'Consume a balanced meal',          d: 'Include all six tastes in each meal' },
            { n: '10', t: 'Include milk and ghee',            d: 'Ethically sourced; in proper quantity' },
            { n: '11', t: 'Consume local and seasonal produce', d: 'Eat what grows in your region and season' },
          ],
        },
        {
          label: 'How to eat', colIcon: 'utensils', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '7',  t: 'Follow proper eating conduct',        d: 'Eat mindfully without distractions' },
            { n: '8',  t: 'Eat only after proper digestion',    d: 'Do not eat until the previous meal is digested' },
            { n: '9',  t: 'Maintain proper quantity',           d: 'Stomach division rule — leave space' },
            { n: '12', t: 'Cook food properly',                 d: 'Avoid overcooked or undercooked food' },
            { n: '13', t: 'Eat with mindfulness and gratitude', d: 'Mental state influences digestion' },
          ],
        },
        {
          label: 'What to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '3',  t: 'Maintain purity in preparation',             d: 'Cleanliness of utensils, place, cook\'s mental state' },
            { n: '4',  t: 'Avoid incompatible combinations (Viruddha)', d: 'E.g. milk should not be combined with salty or sour' },
            { n: '14', t: 'Avoid processed foods; prefer organic',      d: 'Highly processed items harm long-term health' },
          ],
        },
      ],
    },
    {
      icon: 'heart', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=160&h=160&fit=crop', tag: 'Wellness code',
      title: 'Sadvritta (Code of Conduct for Complete Well-being)',
      desc: 'True wellness includes mental, emotional, and spiritual dimensions',
      cols: [
        {
          label: 'Daily habits', colIcon: 'calendar', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
          labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
          cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
          items: [
            { n: '→', t: 'Follow a planned daily routine',    d: 'Avoid last-minute pressure with a timetable' },
            { n: '→', t: 'Prepare comprehensive plans',       d: 'Daily, weekly, monthly, and yearly roadmap' },
            { n: '→', t: 'Write down goals and thoughts',     d: 'Clarity in planning reduces confusion and stress' },
            { n: '→', t: 'Spend quality time with family',   d: 'Without television or mobile phones' },
          ],
        },
        {
          label: 'Life balance', colIcon: 'balance', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '→', t: 'Give equal importance to all life spheres', d: 'Professional, personal, family, social, spiritual' },
            { n: '→', t: 'Choose satisfying work',                    d: 'Not just financial gain' },
            { n: '→', t: 'Pursue activities beyond profession',       d: 'Art, travel, music, social activities' },
            { n: '→', t: 'Follow a spiritual path',                   d: 'Self-reflection reduces inner conflicts and stress' },
          ],
        },
        {
          label: 'Traits to control', colIcon: 'shield', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '✗', t: 'Greed',                               d: 'Difference between need and want; harms self and others' },
            { n: '✗', t: 'Uncontrolled anger',                  d: 'Destroys peace and relationships' },
            { n: '✗', t: 'Wrong desires',                       d: 'Unrighteous desires lead to suffering' },
            { n: '✗', t: 'Jealousy, ego, excessive attachment', d: 'Lead to hatred, inner unrest, and suffering' },
          ],
        },
      ],
    },
    // {
    //   icon: 'female', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=160&h=160&fit=crop', tag: 'Special topic',
    //   title: 'Rutusrava Paricharya (Guidelines during Menstruation)',
    //   desc: 'Dietary and lifestyle practices during menstruation',
    //   cols: [
    //     {
    //       label: 'Diet — eat', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '✓', t: 'Simple, freshly prepared, warm foods', d: 'Include slightly more ghee in meals' },
    //         { n: '✓', t: 'Drink plenty of warm fluids',          d: 'To reduce discomfort' },
    //       ],
    //     },
    //     {
    //       label: 'Diet — avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
    //       labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
    //       cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
    //       items: [
    //         { n: '✗', t: 'Heavy meals and overeating',         d: 'Non-vegetarian food during this time' },
    //         { n: '✗', t: 'Curd, coffee, tea, chocolates',      d: 'Excess spices, deep-fried, baked, processed foods' },
    //       ],
    //     },
    //     {
    //       label: 'Rest and activity', colIcon: 'activity', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '✓', t: 'Minimise physical and mental exertion', d: 'Gentle deep breathing; sleep adequately at night' },
    //         { n: '✗', t: 'Strenuous activities',                  d: 'Workouts, gym, yoga asanas, pranayama, swimming, long walks' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   icon: 'clock', img: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=160&h=160&fit=crop', tag: 'Science',
    //   title: 'Circadian Rhythm — the body\'s internal clock',
    //   desc: 'Science behind waking before dawn and biological rhythm',
    //   cols: [
    //     {
    //       label: 'Key markers', colIcon: 'clock', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
    //       labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
    //       cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
    //       items: [
    //         { n: '…', t: 'Melatonin',        d: 'Released by the pineal gland at night; helps initiate sleep' },
    //         { n: '…', t: 'Body temperature', d: 'Lowest around 5 am, a few hours before natural wake time' },
    //         { n: '…', t: 'Cortisol',         d: 'Stress hormone; highest in the morning; promotes alertness' },
    //       ],
    //     },
    //     {
    //       label: 'Scientific correlations', colIcon: 'zap', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
    //       labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
    //       cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
    //       items: [
    //         { n: '→', t: 'Cognition',   d: 'Early cortisol spike improves focus, alertness, and problem-solving' },
    //         { n: '→', t: 'Entrainment', d: 'Consistent early waking + morning light synchronises the biological clock' },
    //       ],
    //     },
    //     {
    //       label: 'Appetite hormones', colIcon: 'droplet', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
    //       labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
    //       cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
    //       items: [
    //         { n: '→', t: 'Ghrelin (hunger hormone)', d: 'Suppressed during sleep' },
    //         { n: '→', t: 'Leptin (satiety hormone)',  d: 'Rises during the night' },
    //         { n: '→', t: 'Aligned rhythm',            d: 'Supports proper appetite regulation and weight management' },
    //       ],
    //     },
    //   ],
    // },
  ];

  get total() { return this.sections.length; }
  get section() { return this.sections[this.current()]; }
  get itemCount() { return this.section.cols.reduce((a, c) => a + c.items.length, 0); }

  goto(i: number) { this.current.set(i); }
  prev() { if (this.current() > 0) this.current.update(v => v - 1); }
  next() { if (this.current() < this.total - 1) this.current.update(v => v + 1); }
}
