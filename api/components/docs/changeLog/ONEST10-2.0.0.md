### Updated Specifications  

| Version                         | ONEST10-2.0.1 |  
| :------------------------------ | :----------------- |  
| Updates in API Specs on dev doc | 7th January 2025 |  

---

#### Change Logs  
##### BECKN:  
- Added Creator object as per BECKN specifications.  
- **Locations**: Job location will be defined, and Creator will represent the creator’s headquarter.  
- **Creator Tags**: Added locations of the creator in the tags of the items.  

---

#### Updates  

- **`on_search` IDs and Fulfillments**:  
   - IDs align with fulfillments.
- **Phone Number Formatting**:  
   - All phone numbers should strictly be in a 10-digit format (e.g., `1234567890`). Remove country code `+91` in output.
- **`JOB_PROVIDER_LOCATION` Adjustment**:  
   - Moved to provider-level tags as `PROVIDER_LOCATION`. Only `address` will remain in this tag.  
- **`MANDATORY_ELIGIBILITY`**:  
   - Added `MANDATORY_ELIGIBILITY` as a required field in every tag, either `true` or `false`.  
- **Renamed Tags**:  
   - `DOCUMENTS_REQUIRED` is now `DOC_REQUIREMENTS`.
- **Removed `WORKING_HOURS`**:  
   - This field has been removed since it is already managed under `timing` tags.  
- **Renamed `ACADEMIC_ELIGIBILITY`**:  
   - This tag is now called `ACADEMIC_QUALIFICATIONS`.  
- **Gender Preference**:  
   - Added a `gender_preference` instead of `gender` field in `on_search`.  
- **Locations in `on_search`**:  
   - Locations now include an `area_code` field.
- **Removed `INDUSTRY_TYPE` and `DEPARTMENT`**:  
    - These fields have been removed from the catalog.
- **EMPLOYMENT_TYPE Renamed to JOB_TYPE**:  
    - `EMPLOYMENT_TYPE` will now be referred to as `JOB_TYPE`.
- **SALARY_INFO Renamed to COMPENSATION**:  
    - The `SALARY_INFO` field has been renamed to `COMPENSATION`, which will have `TYPE` (e.g., ctc/lpa), `MIN`, and `MAX` (range of salary).
- **COMMERCIAL_NAME Values**:  
    - `COMMERCIAL_NAME` will now have values derived from Fulfillments, such as `lead & recruitment`.
- **Skills and Language by Name**:  
    - Skills and languages will now be identified by their names instead of codes.
- **Remove Expected Salary**:  
    - The `expected salary` field will be removed.
- **Customer Person Tags After `/init`**:  
    - Customer Person tags should not be sent after `/init`.
- **Quote Handling**:  
    - The `quote` field will be removed from `/init` but will remain in every other call.
- **Remove URL as Collected_by**:  
    - The `url` will be removed as `collected_by` is already specified as BAP.
- **Payments in Array Format**:  
    - The `payments` field will now be an array instead of an object.
- **Remove SETTLEMENT_PHASE and SETTLEMENT_TYPE from `/init`**:  
    - These fields will no longer be part of the `on_init` action.
- **Add SETTLEMENT_BASIS & SETTLEMENT_WINDOW in Confirm**:  
    - These fields will be added in the `confirm` action.
- **Unsolicited `on_init` with `fulfillment.state` (APPLICATION_FILLED)**:  
    - Will be sent without any xinput forms.

---

#### UI:  
- Simplified Swagger UI texts (e.g., brd, prd).  
- Added change log and log submission UI.  

---

#### Functional Changes:  
- **Mandatory Eligibility**:  
  - Ensured `MANDATORY_ELIGIBILITY` is included in all cases, even when `false`.  
- **Timings**:  
  - `application_validity_time` replaced by `provider/items/time/range` and removed.  
  - `day_from`, `day_to`, `time_from`, and `time_to` tags added at the item level for detailed split timing representations.  
- **Fulfillment Logic**:  
  - Included `F3` as a fulfillment type for lead and recruitment purposes.  
- **Item Status**:  
  - `item/time/enable_disabled` reflects the current item status.  
  - `range` shows application visibility, as per existing specifications.  
- **Provider Tags**:  
  - Moved `JOB_PROVIDER_LOCATION` to `PROVIDER_LOCATION` and retained only `address`.  
- **Document Tags**:  
  - Renamed `DOCUMENTS_REQUIRED` to `DOC_REQUIREMENTS` and relocated it below `JOB_REQUIREMENTS`.  