---
title: "Docker and Kubernetes"
date: "2023-10-15"
image: Docker-Kubernetes.png
info: Docker and Kubernetes
isFeatured: true
---

מה זה Docker בעצם? 🐋 ומה עם Kubernetes? 🚢

נושאים שכל מתכנת חייב להכיר (לפחות ברמה הבסיסית).

המשיכו לקרוא כדי לקבל טעימה קטנה 👇👇

בעזרת Docker, אנחנו מכינים סדרה של Containers, שכל אחד מהם הוא בעצם
סביבה מחשובית מבודדת המאפשרת להריץ תוכנית אחת בלבד. כולם יחד נועדו ליצור
סוג של ecosystem או פלטפורמה עבור האפליקציה.

🟦

👈 למה בעצם להשתמש ב- Docker?

הרצת התוכנית על המחשב שלנו מניחה הנחות רבות על סביבת ההרצה שלנו. עצם זה
שאנחנו כותבים npm start כדי להריץ אפליקציית ריאקט לוקאלית, יוצא מתוך
נקודת הנחה שמותקנות אצלנו חבילות npm ו- node.js על המחשב. בנוסף על כך,
כדי להריץ את התוכנית צריך ידע מסויים על איך בדיוק מפעילים אותה, כמו למשל
לכתוב בטרמינל את הפקודה \"npm start\" ספציפית, מה שבמקרים מסוימים יכול
להיות לא כזה טריוויאלי במיוחד כשזו תוכנית שלא אנחנו כתבנו.

כל הפואנטה של Docker זה להעלים את בעיות אלה - ע\"י יצירת Containers
העוטפים את כל ה- dependencies שתוכנית דורשת כדי לרוץ. אז מה זה בעצם
אומר? שאנחנו הולכים \"לעטוף\" את npm, node וחבילות נוספות שדרושות להרצת
התוכנית לתוך הסביבה המחשובית המבודדת הזו. בנוסף נכליל בתוך הקונטיינר קצת
מידע על איך להריץ את התוכנית ומה עלינו לכתוב. כל קונטיינר כזה יכול לרוץ
על כל מערכת הפעלה ולהכיל כל חבילה וכל שפת תכנות שאנחנו יכולים לחשוב
עליה. וזו הפואנטה העיקרית בסופו של דבר - דוקר מאפשר להתקין כל תוכנה לא
רק על המחשב הפרטי שלנו, אלא גם על שרתים ועל כל מחשב אחר בעצם. הוא מפשט
ומקל על תהליך ההתקנה ללא חשש משגיאות וחוסר בקבצים או בתלויות.

🟦

👈 אחרי כל ההקדמה הזו בעצם הרמתי לעצמי להנחתה כדי לדבר על מה זה בעצם
Kubernetes? 🤔

בפשטות - קוברנטס זה כלי להרצת קונטיינרים שונים ביחד. כשמשתמשים בקוברנטס
מספקים לו קבצי קונפיגורציה שאומרים לו במפורשות איזה קונטיינרים רוצים
להריץ באפליקציה ואיך הם הולכים לתקשר בניהם.

בקוברנטס אנחנו יוצרים דבר שנקרא Cluster = סט של מכונות וירטואליות, שכל
אחת כזו נקראת Node. כל ה- Nodes מנוהלים על ידי תוכנית שנקראת Master (שלה
גם מקצים ישירות את קבצי הקונפיגורציה), ובזמן הרצת התוכנית קוברנטס יקצה
את ההרצה לאחד מה- Nodes. התקשורת בין ה- Nodes יתנהל על ידי ערוץ משותף
בתוך הקלאסטר, שיהיה גם אחראי על scaling ואוטומציה של דיפלויימנט
לאפליקציה.

🟦

רק להמחשה, בתמונה למטה אפשר לראות השוואה בין ארכיטקטורות שונות של
דיפלויימנט - השיטה המסורתית לעומת שיטת הקונטיינרים של דוקר ושיטת
קוברנטס.

![docker and k8s architectures](docker-k8s.png)

זה ככה רק על קצה המזלג. אם הפוסט עשה לכם חשק לצלול יותר לנושא ומצאתם בו
עניין, אשמח ללייק ולתגובה 😉 וכמובן מי שיכול להוסיף מהידע שלו, מוזמן
להעשיר אותנו בתגובות 🙌
