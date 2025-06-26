import ProfileSidebar from "@/components/ProfileSidebar"


const Profile = () => {
  return (
    <div>

            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="./about/bg-about.mp4" type="video/mp4" />
                </video>
            </div>

            <section className="profile-page flex">
                <ProfileSidebar/>
                <div className="text-white">sexsi melumatlar</div>
            </section>
        </div>
  )
}

export default Profile