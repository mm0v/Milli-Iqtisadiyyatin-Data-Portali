import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div>
            <div>
                <div className="fixed inset-0 -z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="./signIn/bg-video-signIn.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="flex items-center justify-end min-h-screen p-4">
                <Card className="w-full max-w-lg bg-[#070618] text-white">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl font-bold">Daxil ol</CardTitle>
                        <p className="text-sm">Hesabın yoxdur? <Link to={"/register"} className='hover:underline'>Hesab Yarat</Link></p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail və ya istifadəçi adı</Label>
                            <Input id="email" type="email" placeholder='E-poçt ünvanı daxil edin' className='h-12 border-2' />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Şifrə</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="h-12 border-2 pr-10" // Added right padding to make room for the icon
                                    placeholder="Şifrənizi daxil edin"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                checked={rememberMe}
                                onCheckedChange={(checked) => {
                                    setRememberMe(checked as boolean);
                                }}
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm font-normal cursor-pointer"
                            >
                                Yadda saxla
                            </Label>
                        </div>

                        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                            Daxil ol
                        </Button>

                        <div className="relative my-4 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-2 text-sm text-white">və ya Google ilə davam edin</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full mt-4 h-12 border-gray-300 cursor-pointer text-black"
                        >
                            <img
                                src="https://www.google.com/favicon.ico"
                                alt="Google"
                                className="w-6 h-6 mr-2"
                            />
                            Google ilə davam et
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;