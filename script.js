// スクロールに応じて要素をふわっと表示（要件定義書：スクロールアニメーション）
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".reveal");

  // IntersectionObserver 非対応環境では全て表示しておく
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
});
