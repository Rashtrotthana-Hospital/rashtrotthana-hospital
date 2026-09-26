export interface TenderDocument {
  /** used in the viewer URL: /tenders/view/<slug> */
  slug: string;
  title: string;
  /** file name inside src/assets/tenders */
  file: string;
}

/** Tender documents listed on the tender page and opened by the viewer. */
export const TENDER_DOCUMENTS: TenderDocument[] = [
  {
    slug: 'anesthesia-workstation-with-agm',
    title: 'Anesthesia Work Station with AGM',
    file: 'anesthesia-workstation-with-agm.pdf'
  },
  {
    slug: 'transport-ventilator',
    title: 'Transport Ventilator',
    file: 'transport-ventilator.pdf'
  },
  {
    slug: 'thulium-laser-machine',
    title: 'Thulium Laser Machine',
    file: 'thulium-laser-machine.pdf'
  },
  {
    slug: 'neuro-drill',
    title: 'Neuro Drill',
    file: 'neuro-drill.pdf'
  },
  {
    slug: 'ortho-power-drill',
    title: 'Ortho Power Drill',
    file: 'ortho-power-drill.pdf'
  },
  {
    slug: 'microscope-ent-neuro',
    title: 'Microscope (ENT & Neuro)',
    file: 'microscope-ent-neuro.pdf'
  },
  {
    slug: 'microdebrider',
    title: 'Microdebrider',
    file: 'microdebrider.pdf'
  },
  {
    slug: 'lap-tower-with-instruments',
    title: 'Lap Tower with Instruments',
    file: 'lap-tower-with-instruments.pdf'
  },
  {
    slug: 'general-surgical-set',
    title: 'General Surgical Set',
    file: 'general-surgical-set.pdf'
  },
  {
    slug: 'clinic-on-wheels',
    title: 'Clinic on Wheels',
    file: 'clinic-on-wheels.pdf'
  },
  {
    slug: 'cautery-machine',
    title: 'Cautery Machine',
    file: 'cautery-machine.pdf'
  },
  {
    slug: 'c-arm-machine',
    title: 'C-Arm Machine',
    file: 'c-arm-machine.pdf'
  }
];
