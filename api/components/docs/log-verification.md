# Logs to Be Submitted for Applicable Flows

<!-- Submit logs for the applicable flows below by creating a PR [here](#). -->

---

## Group A
### Provider NP - Setup
- Define catalog with 2 separate providers (2 locations per provider) and the following (as applicable):
  - Supported fulfillment options - [TBD];
  - Credentials.

---

## Group B (Phase 1)
### Provider NP - Setup
- Define category-specific catalog, with the same configuration as in Group A but including the following:
  - **Category-specific variations:**
    - Jobs customizations (along with base applications), variants, application availability, custom menu.
    - Scenarios to consider:
      1. Lead application (price X), Verified lead (price > 0).
      2. Recruitment fees & Verified lead > 0.
    - Variants (along with base applications).

---

## Group C
### Provider NP - Setup
- Same as in Group B.

---

## Flow Details

### **Group A: Flow 1**
1. Seeker NP initiates a full catalog pull.
2. Provider responds with the full catalog.
3. Seeker NP initiates a catalog incremental refresh request.
4. Provider NP responds with an incremental catalog refresh response.

---

### **Group B: Flow 1 to 3**
- Same as Group A.

---

### **Group C: Flow 1 to 5**
- Same as Group B.

---

### **Group A: Flow 2**
1. Seeker selects multiple applications (> 1 qty for each application) for applying.
2. Seeker selects one application for applying.
3. Provider NP provides all fulfillment slots (different fulfillment types).
4. Seeker selects a different type.
5. Provider NP accepts and proceeds to submit.
6. Application is confirmed.
7. Seeker NP tracks the live status of the application.
8. Unsolicited status updates for the application until fulfilled.

---

### **Group B: Flow 4**
1. Seeker NP cancels the application before processing.

---

### **Group C: Flow 6**
1. Provider cancels one of the applications before processing.
2. Seeker returns an application, which Provider NP accepts with liquidation.
3. Seeker cancels another application, which Provider NP accepts with the return of the application.

---

### **Group A: Flow 3**
1. Seeker selects multiple applications (> 1 qty for each application) for checkout.
2. Provider NP provides all fulfillment slots (different fulfillment types), some with tracking enabled.
3. Provider NP provides details of applications that are out of stock and those for which the requested quantity isn't available.
4. Seeker selects a different type.
5. Seeker NP accepts and proceeds to checkout.
6. Application is confirmed.
7. Seeker NP tracks the live status of the application.
8. Unsolicited status updates for the application until fulfilled.

---

### **Group B: Flow 5**
1. Provider NP cancels the application due to seeker unavailability.

---

## Catalog Rejection Flows [Optional]

---

### **Flow 7**
1. Seeker app sends a search by city (full catalog) request.
2. Provider app responds with their catalog having errors at the application/provider/BPP level.
3. Seeker app responds with an ACK with the minimum catalog processing time.
4. Seeker app sends a catalog rejection report.

---

### **Flow 8**
1. The provider app rectifies the issues as per the catalog rejection report and responds with a catalog in the next pull.
2. Seeker app responds with a successfully processed status.

---

### **Flow 9**
1. Seeker app sends an incremental search request.
2. Provider app responds with an incremental catalog having errors at the application/provider/BPP level.
3. Seeker app responds with an ACK with the minimum catalog processing time.
4. Seeker app sends a catalog rejection report.

---
