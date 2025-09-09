# Backup/restore logic

First get a PAT from your contentful account.

## Backup

```bash
contentful space export --config backups/export-config.json
```

## Restore

```bash
contentful space import --config backups/import-config.json
```
