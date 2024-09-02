🔙[[Home]]

```dataview
TABLE
	kindle-sync.author as Author,
	kindle-sync.lastAnnotatedDate as "Last Annotated At",
	("![coverimg|100](" + kindle-sync.bookImageUrl + ")") as Bookcover
FROM "Kindle Highlights"
SORT kindle-sync.lastAnnotatedDate DESC
```

