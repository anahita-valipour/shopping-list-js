// عناصر صفحه
const addItem = document.querySelector("#add-item");
const itemName = document.querySelector("#item-name");
const shoppingList = document.querySelector("#shopping-list");
const emptyMessage = document.querySelector("#empty-message");
const itemCount = document.querySelector("#item-count");
const itemRemind = document.querySelector("#item-remind");
const itemPurchase = document.querySelector("#item-purchase");
const searchProduct = document.querySelector("#search-product");

let count = 0;
let isValied = true;
let purcheseCount = 0;
let editTitle = null;

addItem.addEventListener("click", () => {
  if (itemName.value.trim()) {
    if (editTitle !== null) {
      editProduct();
    } else {
      createProduct();
    }
  } else if (itemName.value.trim() === "") {
    isValied = false;
    emptyMessage.textContent = "نام کالا را وارد کنید";
  }
});

// ساخت کالا
function createProduct() {
  let li = document.createElement("li");
  li.dataset.title = itemName.value;
  let span = document.createElement("span");
  span.textContent = itemName.value;
  span.classList.add("span-title");

  li.appendChild(span);
  shoppingList.appendChild(li);

  emptyMessage.textContent = "کالا با موفقیت اضافه شد";
  count++;
  itemCount.textContent = count;

  // ساخت دکمه‌ها
  let btnDelet = document.createElement("button");
  let btnShop = document.createElement("button");
  let btnEdit = document.createElement("button");

  btnEdit.textContent = "ویرایش";
  btnDelet.textContent = "حذف";
  btnShop.textContent = "هنوز نخریدم";
  btnDelet.classList.add("delete");
  btnEdit.classList.add("edit");
  li.appendChild(btnEdit);
  li.appendChild(btnDelet);
  li.appendChild(btnShop);

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
  setTimeout(() => {
    itemName.value = "";
    emptyMessage.textContent = "";
  }, 1000);
}
// نمایش تعداد خریداری‌شده و باقی‌مانده
function appdateCount() {
  itemPurchase.textContent = purcheseCount;
  itemRemind.textContent = count - purcheseCount;
}
// حذف کالا
shoppingList.addEventListener("click", (e) => {
  const liItem = e.target.closest("li");
  if (e.target.classList.contains("delete")) {
    liItem.remove();
    count--;
    itemCount.textContent = count;
  }
});
// ویرایش کالا
shoppingList.addEventListener("click", (e) => {
  const liItem = e.target.closest("li");
  const spanItem = liItem.querySelector(".span-title");
  if (e.target.classList.contains("edit")) {
    editTitle = spanItem;
    itemName.value = spanItem.textContent;
    spanItem.textContent = "";
    addItem.textContent = "ویرایش کالا ";
  }
});
function editProduct() {
editTitle.textContent = itemName.value;
  itemName.value = "";
  addItem.textContent = "افزودن کالا";
  editTitle = null;
}

function applyProduct() {
  const queryProduct = searchProduct.value.trim();
  const arrayProduct = [...shoppingList.children];
  arrayProduct.forEach((li) => {
    const title = li.dataset.title;
    const maches = title.includes(queryProduct);
    li.hidden = !maches;
    console.log(title, queryProduct, maches);
  });
}
searchProduct.addEventListener("input", applyProduct);
