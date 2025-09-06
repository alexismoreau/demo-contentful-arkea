# Backup/restore logic

## Backup

```bash
backupDir=./backups
space_id=your-space-id
management_token=your-management-token
contentful space export --space-id $space_id --management-token $management_token --environment-id master --include-drafts --download-assets
```

## Restore

```bash
space_id=your-space-id
management_token=your-management-token
contentful space import --space-id $space_id --management-token $management_token --environment-id dev-2025-09-06 --content-file $backupDir/contentful-export-your-space-id-master-2025-09-06T17-03-52.json
```
