# Technical challenge

# Celonis Coding Challenge

## Remarks

I thoroughly enjoyed participating in this Celonis coding challenge, particularly diving into the technical aspects of the mono-repo architecture and its integration with React/MUI. The challenge was both fun and enlightening, providing a hands-on experience with Backstage's efficient setup. Throughout the process, I was impressed by the architecture's capabilities and am eager to explore more within Celonis projects. Despite encountering some challenges, the comprehensive documentation was instrumental in guiding me through. The addition of pagination and an intuitive navigation feature in the frontend plugin of the navbar were personal touches I felt compelled to implement, believing they truly rounded off the project. Overall, the challenge was a rewarding experience, taking approximately 4-5 hours to complete, excluding the time spent on yarn installations.

## Getting Started

To run the project, navigate to the `celonis-backstage` folder and enter the following command:

```bash
yarn dev
```

## Questions and Answers

### Q1: When Backstage service is up and running, how many apps are running?
- **Answer**: 2 Apps are running - the backend and the frontend.

### Q2: How many ports are used on the hosting machine?
- **Answer**: 2 ports are used - 3000 for the frontend and 7000 for the backend.

### Q3: Why do we have 3 package.json files?
- **Answer**: The mono-repo architecture necessitates 3 package.json files - one for overall project configurations and one each for frontend and backend configurations.

### Q4: In which package.json file would you put a new dependency and why?
- **Answer**: New frontend dependencies should be added to `/packages/app/package.json`, while backend dependencies should go into `/packages/backend/package.json` to maintain organization and ensure dependencies are only installed where needed.

### Q5: Why changes on app-config.local.yaml are not committed by default on git? Is this a good or bad practice and why?
- **Answer**: Changes to `app-config.local.yaml` are not committed to prevent sharing sensitive or environment-specific configurations. This is a good practice for security and flexibility in local development.

### Q6: Would you use the existing app-config.production.yaml to configure the database credentials for your production database and commit the changes in git?
- **Answer**: No. It's recommended to use environment variables for production configurations like database credentials, enhancing security by preventing sensitive data exposure.

### Q7: Can you describe why we configure backend.cors values in app-config.yaml? What is CORS? Why is it important on modern browsers?
- **Answer**: `backend.cors` values in `app-config.yaml` define CORS (Cross-Origin Resource Sharing) policies, crucial for security in modern web development by allowing controlled access to resources across different domains.

### Q8: Where it needs to be changed and why?
- **Answer**: Changes should be made in `packages/app/src/components/Root/Root.tsx` to modify the `<SidebarItem/>` property, enhancing navigation consistency in the frontend.

### Q9: Which page is loaded first, Root.tsx or App.tsx, and why?
- **Answer**: `App.tsx` loads first as it sets up the core components, plugins, and routing, serving as the entry point for the application.

### Q10: How did you verify the plugin worked?
- **Answer**: Verification was done using Postman with GET requests to backend endpoints, ensuring the backend plugin's functionality.

### Q11: How did this hash related to the email upgraded the validity of our data?
- **Answer**: Hashing emails with MD5 validates data integrity by ensuring any alteration in the email would result in a different hash value.

### Q12: How does MD5 work, where should it be used and where not? Give some examples.
- **Answer**: MD5 produces a fixed 128-bit hash value from any length of data, suitable for checksums and integrity checks but not for cryptographic security due to vulnerabilities.


