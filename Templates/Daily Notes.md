---
title: {{ Date:YYYY-MM-DD }}
date: {{ Date:YYYY-MM-DD ddd }}
aliases: {{ Date:YYYYMMDD, YYMMDD}}
---
🏠[[Home]]
## Today's Quote
<% tp.web.daily_quote() %>
## Fleeting Notes
```dataview
TABLE modified_date AS "Modified At"
FROM "Fleeting Notes"
WHERE created_date = date(<% tp.date.now("YYYY-MM-DD") %>)
SORT file.ctime DESC
```

## Today's Notes
```dataviewjs
const headings = ["Title", "Tags", "Media", "Status"];
const fileQuery = '"Notes" or "+"';
const { fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

dv
	.table(headings, 
		await Promise.all(dv.pages(fileQuery)
			.filter(p => moment(new Date(p.createdAt).toString()).isSame("<% tp.date.now("YYYY-MM-DD") %>", "day"))
			.limit(15)
			.sort(p => p.modifiedAt, "desc")
			.map(async p => [
				p.file.link,
				await f(dv, p, "tags"),
				await f(dv, p, "media"),
				await f(dv, p, "status")
			]))
	);
```
## Free Writing