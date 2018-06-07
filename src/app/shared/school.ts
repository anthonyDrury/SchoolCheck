export interface ISchools {
        // Shared
        AgeID: string;
        School_name: string;
        Street: string;
        Town_suburb: string;
        Postcode: string;
        Level_of_schooling: string;
        School_gender: string;
        School_specialty_type: string;
        Fed_electorate: string;
        SA4: string;
        ASGS_remoteness: string;
        Latitude: string;
        Longitude: string;

        // Gov Only
        Support_classes?: string;
        Student_number?: string;
        Principal_network?: string;
        Date_extracted?: string;
        Assets_unit?: string;
        ICSEA_value?: string;
        Distance_education?: string;
        Fax?: string;
        Local_health_district?: string;
        AECG_region?: string;
        Phone?: string;
        Indigenous_pct?: string;
        Student_string?: string;
        Opportunity_class?: string;
        Intensive_english_centre?: string;
        School_subtype?: string;
        Late_opening_school?: string;
        Preschool_ind?: string;
        Selective_school?: string;
        FACS_district?: string;
        School_Email?: string;
        LGA?: string;
        Date_1st_teacher?: string;
        Electorate?: string;
        Operational_directorate?: string;
        School_code?: string;
        LBOTE_pct?: string;

        // Private Only
        Head_campus_ageID?: number;
        Sector?: string;
        Systemic?: string;
        School_affiliation?: string;
        Campus_level: string;
        Dicosese?: string;
        Sys_desc?: string;
        School_url?: string;
        Lga?: string;
        Electorate_code?: string;
        SA3?: string;
}

