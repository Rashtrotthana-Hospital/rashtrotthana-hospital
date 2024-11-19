
  import { SubFacility } from './sub-facility.model';
  
  export interface Facility {
    image_1: string;
    image_2: string;
    main_heading: string;
    heading: string;
    subFacilities: SubFacility[];
    bg_image:any;
  }