// عناصر صفحه
const addItem = document.querySelector("#add-item");
const itemName = document.querySelector("#item-name");
const shoppingList = document.querySelector("#shopping-list");
const emptyMessage = document.querySelector("#empty-message");
const itemCount = document.querySelector("#item-count");
const itemRemind = document.querySelector("#item-remind");
const itemPurchase = document.querySelector("#item-purchase");

let count = 0;
let isValied = true;
let purcheseCount = 0;

// افزودن کالا
addItem.addEventListener("click", () => {
  if (itemName.value.trim()) {
    // ساخت کالا
let li = document.createElement("li");

let itemTitle = document.createElement("span");
itemTitle.textContent = itemName.value;
itemTitle.classList.add("item-title");

li.appendChild(itemTitle);
shoppingList.appendChild(li);

    emptyMessage.textContent = "کالا با موفقیت اضافه شد";
    count++;
    itemCount.textContent = count;

    // ساخت دکمه‌ها
    let btn = document.createElement("button");
    let btnShop = document.createElement("button");

    btn.textContent = "حذف";
    btnShop.textContent = "هنوز نخریدم";

    li.appendChild(btn);
    li.appendChild(btnShop);

    // حذف کالا
    btn.addEventListener("click", () => {
      li.remove();
      count--;
      itemCount.textContent = count;
    });

    // تغییر وضعیت خرید
    btnShop.addEventListener("click", () => {
      if (li.classList.toggle("hide")) {
        btnShop.textContent = " خریدم";
        purcheseCount++;

        appdateCount();
      } else {
        btnShop.textContent = "هنوز نخریدم";

        appdateCount();
      }
    });

    // پاک کردن ورودی و پیام
    setTimeout(() => {
      itemName.value = "";
      emptyMessage.textContent = "";
    }, 1000);
  } else if (itemName.value.trim() === "") {
    isValied = false;
    emptyMessage.textContent = "نام کالا را وارد کنید";
  }
});

// نمایش تعداد خریداری‌شده و باقی‌مانده
function appdateCount() {
  itemPurchase.textContent = purcheseCount;
  itemRemind.textContent = count - purcheseCount;
}
