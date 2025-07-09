import ProfileSidebar from "@/components/ProfileSidebar"
const Profile = () => {
  return (
    <section >
      <div className="fixed inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./about/bg-about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex pt-14 px-8">
        <ProfileSidebar />
      </div>
    </section>
  )
}

export default Profile