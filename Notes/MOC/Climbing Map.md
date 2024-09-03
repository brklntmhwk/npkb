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
>[!info]+
> Uncheck the "isActive" field if you want to pause your project for the time being.
```dataview
table launchedAt
from #🎯 
where isActive != true and completeAt = date(9999-12-31)
sort launchedAt desc
```
## 💮 Complete
>[!info]+
> Once your project has been complete, change the "completeAt" field to the complete date
```dataview
table launchedAt, completeAt 
from #🎯 
where isActive != true and completeAt != date(9999-12-31)
sort completeAt desc
```
## ⏭ Planning
>[!info]+
> If you're still planning your project, change the "launchedAt" field to the future date on which it's going to kicked off.
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