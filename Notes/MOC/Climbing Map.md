🔙[[Home]]

## 🧗 Ongoing
```dataviewjs
const headings = ["Title", "Launched At"];
const fileQuery = "#🎯";
const isOngoingDate = (rawDate) => {
	const today = moment()
	const targetDate = moment(rawDate.toString())
	if (targetDate.diff(today, "days") < 0) {
		return true
	} 

	return false
}

dv
	.table(headings, 
		dv.pages(fileQuery)
			.where(p => p.isActive == true)
			.filter(p => isOngoingDate(p.launchedAt))
			.sort(p => p.modifiedAt, "desc")
			.map(p => [
				p.file.link,
				p.launchedAt
			])
	);
```

## 💤 On hiatus
```dataview
table launchedAt
from #🎯 
where isActive != true and completeAt = date(9999-12-31)
sort launchedAt desc
```
## 💮 Complete
```dataview
table launchedAt, completeAt 
from #🎯 
where isActive != true and completeAt != date(9999-12-31)
sort completeAt desc
```
## ⏭ Planning
```dataviewjs
const headings = ["Title", "Launched At"];
const fileQuery = "#🎯";
const isAfterDate = (rawDate) => {
	const today = moment()
	const targetDate = moment(rawDate.toString())
	if (targetDate.diff(today, "days") >= 0) {
		return true
	} 

	return false
}

dv
	.table(headings, 
		dv.pages(fileQuery)
			.where(p => p.isActive = true)
			.filter(p => isAfterDate(p.launchedAt))
			.sort(p => p.launchedAt, "asc")
			.map(p => [
				p.file.link,
				p.launchedAt
			])
	);
```

## Reference
[[資格の道まとめ]]
[[キャリアパス]]