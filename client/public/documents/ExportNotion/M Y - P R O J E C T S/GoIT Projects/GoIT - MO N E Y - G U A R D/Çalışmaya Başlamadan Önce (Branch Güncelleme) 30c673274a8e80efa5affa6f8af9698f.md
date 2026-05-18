# Çalışmaya Başlamadan Önce (Branch Güncelleme)

```
git checkout main
git pull origin main
npm install
git checkout dev-kutluhan
git merge main
```

---

### **💾 Commit + Push (Feature Bitince)**

```
git add .
git commit -m "feat: açıklayıcı bir commit mesajı yaz"
git push origin dev-kutluhan
```

> Commit mesajı örnekleri:
> 
- feat: dashboard chart component added
- fix: login form validation bug fixed
- style: navbar spacing adjusted
- refactor: redux slice structure improved

---

Hepsi bu kadar 🚀

Bunu her feature tamamladığında uygularsan takım workflow’un tertemiz olur.