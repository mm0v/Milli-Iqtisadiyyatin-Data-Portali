import { Card, CardContent } from "@/components/ui/card";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";


const ReCapcha = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="fixed inset-0 z-0">
                <BackgroundVideo videoSrc="/signIn/bg-video-signIn.mp4" />
            </div>

            <div className="relative mx-3 z-10 flex items-center justify-center min-h-screen">
                <Card className="bg-[rgba(7,6,24,0.95)] text-white">
                    <CardContent className="space-y-6">
                        <h2 className="text-sm text-center">{t('auth.verify')}</h2>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm font-normal cursor-pointer"
                            >
                                {t('auth.notRobot')}
                            </Label>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ReCapcha;
