# iPhone-first Installation Guide (summary)

1. Create GitHub repo (name: Amplified-Final) and upload this bundle (Add file -> Upload files).
2. Add Secrets (Settings -> Secrets & variables -> Actions):
   - AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION
   - ECR_REPO, AMPLIFY_APP_ID, AMPLIFY_BRANCH
   - PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_MODE
   - COINBASE_COMMERCE_SHARED_SECRET, JWT_SECRET, EAS_TOKEN
3. Open Codespaces or use GitHub web editor to customize content and branding.
4. Run Actions -> CI Build -> watch logs.
5. After CI success, run Package & Release -> download artifact for sales demo.
6. Run scrub_personal_data workflow before transferring repo or selling.
