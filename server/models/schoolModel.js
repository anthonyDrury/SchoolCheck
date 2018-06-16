// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schoolSchema = new Schema({
    // Shared
    AgeID: String,
    School_name: String,
    Street: String,
    Town_suburb: String,
    Postcode: String,
    Level_of_schooling: String,
    School_gender: String,
    School_specialty_type: String,
    Fed_electorate: String,
    SA4: String,
    ASGS_remoteness: String,
    Latitude: String,
    Longitude: String,

    // Gov Only
    Support_classes: String,
    Student_Number: String,
    Principal_network: String,
    Date_extracted: String,
    Assets_unit: String,
    ICSEA_value: String,
    Distance_education: String,
    Fax: String,
    Local_health_district: String,
    AECG_region: String,
    Phone: String,
    Indigenous_pct: String,
    Student_String: String,
    Opportunity_class: String,
    Intensive_english_centre: String,
    School_subtype: String,
    Late_opening_school: String,
    Preschool_ind: String,
    Selective_school: String,
    FACS_district: String,
    School_Email: String,
    LGA: String,
    Date_1st_teacher: String,
    Electorate: String,
    Operational_directorate: String,
    School_code: String,
    LBOTE_pct: String,

    // Private Only
    Head_campus_ageID: Number,
    Sector: String,
    Systemic: String,
    School_affiliation: String,
    Campus_level: String,
    Dicosese: String,
    Sys_desc: String,
    School_url: String,
    Lga: String,
    Electorate_code: String,
    SA3: String
});






// the schema is useless so far
// we need to create a model using it
var School = mongoose.model('Docs', schoolSchema);

// make this available to our users in our Node applications
module.exports = School;