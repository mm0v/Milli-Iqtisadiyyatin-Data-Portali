import React, { useState } from "react";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

const NewPassword = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);
    const [fade, setFade] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setFade(true);
        setTimeout(() => {
            setSaved(true);
            setFade(false);
        }, 400);
    };

    return (
        <div>
            <div className="video-background">
                <BackgroundVideo videoSrc="./signIn/bg-video-signIn.mp4" />
            </div>
            <div className="flex items-center justify-end min-h-screen p-4">
                <Card className="w-full max-w-lg px-4" style={{ backgroundColor: "rgba(7, 6, 24, 0.95)", color: "white" }}>
                    <div className="w-8 bg-blue-400 rounded-2xl p-1">
                        <Link to={"/login"}>
                            <ArrowBackIcon className="text-white" />
                        </Link>
                    </div>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">
                            {saved ? (t('auth.newPassword.updatedTitle')) : (t('auth.newPassword.title'))}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0">
                        {saved ? (
                            <div className="flex flex-col items-center pt-12 space-y-8">
                                <DoneIcon style={{ fontSize: 64, color: "#22c55e" }} />
                                <Button onClick={() => navigate('/')} className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer ">
                                    {t('auth.newPassword.close')}
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSave} className={`space-y-4 transition-opacity duration-400 ${fade ? "opacity-0" : "opacity-100"}`}>
                                <div className="space-y-2">
                                    <Label htmlFor="password">{t('auth.password')}</Label>
                                    <Input id="password" type="password" minLength={8} required className='w-full h-12 border-gray-500' />
                                    <p className="text-gray-500">{t('auth.alert')}</p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">{t('auth.confirmPass')}</Label>
                                    <Input id="confirmPassword" type="password" minLength={8} required className='w-full h-12 border-gray-500' />
                                </div>
                                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer ">
                                    {t('auth.newPassword.save')}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
            <style>{`
                .transition-opacity {
                    transition: opacity 0.4s;
                }
            `}</style>
        </div>
    );
};

export default NewPassword;
