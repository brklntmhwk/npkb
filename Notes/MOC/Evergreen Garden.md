---
status: "🌱"
modifiedAt: 2024-08-31 10:40
---

🔙[[Home]]

>  (⛵→)🌱→🌿→🌳✨


## Evergreen Notes
>[!tips]+
You can filter the table data by status. Change the status prop above in the frontmatter.

```dataviewjs
const headings = ["Title", "Tags", "Created At", "Status"];
const fileQuery = '"Notes" or "+"';
const { fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

dv
	.table(headings, 
		await Promise.all(dv.pages(fileQuery)
			.filter(p => p.status === dv.current().status)
			.limit(40)
			.sort(p => p.createdAt, "desc")
			.map(async p => [
				p.file.link,
				await f(dv, p, "tags"),
				p.createdAt,
				await f(dv, p, "status")
			]))
	);
```

## Floating Boat Notes
```dataview
TABLE WITHOUT ID file.link as "",  (date(today) - createdAt).day as "Days alive"
FROM "Notes"
WHERE status = "⛵"
SORT createdAt ASC
LIMIT 50
```

