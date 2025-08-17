import BackgroundVideo from "@/components/bg-video/BackgroundVideo"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <div>

            <div className="video-background">
                <BackgroundVideo videoSrc="./signIn/bg-video-signIn.mp4" />
            </div>
            <div className="flex items-center justify-end min-h-screen p-4">
                <Card className="w-full max-w-lg px-4" style={{ backgroundColor: "rgba(7, 6, 24, 0.95)", color: "white" }} >
                    <div className="w-8 bg-blue-400 rounded-2xl p-1">
                        <Link to={"/login"} >
                            <ArrowBackIcon className="text-white" />
                        </Link>
                    </div>
                    <CardHeader className="space-y-3 text-center mb-4">
                        <CardTitle className="text-2xl font-bold">{t('auth.forgotPass.title')}</CardTitle>
                        <p className="text-sm">{t('auth.forgotPass.subTitle')}</p>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0">
                        <div className="space-y-2">
                            <Label htmlFor="email">{t('auth.forgotPass.eMail')}</Label>
                            <Input id="email" type="email" required className='w-full h-12' />
                        </div>
                    </CardContent>
                    <Button onClick={() => navigate('/not-robot')} className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer ">
                        {t('auth.forgotPass.send')}
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default ForgotPassword