Here's the updated document with the additional changes incorporated:  

---

### Change Logs: ONEST API Specs  

| Version                         | ONEST10-2.0.0 |  
| :------------------------------ | :----------------- |  
| Updates in API Specs on dev doc | 30th December 2024 |  

---  

##### BECKN:  
- Added Creator object as per BECKN specifications.  
- **Locations**: Job location will be defined, and Creator will represent the creator’s headquarter.  
- **Creator Tags**: Added locations of the creator in the tags of the items

---  

##### UI:  
- Simplified Swagger UI texts (e.g., brd, prd).  
- Added change log and log submission UI.  

---  

##### Functional:  
- Ensured `mandatory_eligibility` is provided when false (on_search).  
- Changed `application_validity_time` to `provider/items/time/range` and removed it.  
- **Day and Time Tags**: `day_from` and `day_to`, along with `time_from` and `time_to`added in item-level tags with split timings.  
- Removed `commercial_model` from `search_inc`.  
- **START and STOP**: Added `START` inc and `STOP` inc search action call and removed static terms.   
- Removed `descriptor` from `on_search_inc`.  
- Added `quantity zero + time disabled` in `on_search_inc`.  
- **Item Status**: `item/time/enable and disable` added in the item’s current status
- **Fulfillment Logic**:  
  - Added `F3` as lead & recruitment.  
- **Multiple On_Init**: Provision for multiple `on_init` calls for `xinput` form.  

---  
