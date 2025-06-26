
const ProfileSidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-900 text-white">
      <ul className="space-y-4">
        <li><a href="/profile">Şəxsi məlumatlar</a></li>
        <li><a href="/settings" className="font-bold">Hesab ayarları</a></li>
        <li><a href="#">Təhlükəsizlik</a></li>
        <li><a href="#">Ödəniş tarixçəsi</a></li>
        <li><a href="#">Çıxış</a></li>
      </ul>
    </aside>
  )
}

export default ProfileSidebar