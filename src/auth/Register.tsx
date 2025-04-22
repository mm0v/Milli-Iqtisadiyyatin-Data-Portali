import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import CustomPhoneInput from "@/components/PhoneInput";
import { Link } from "react-router-dom";
import FileUpload from "@/components/FileUpload";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleFileChange = (file: File | null) => {
        if (file) {
            console.log('Selected file:', file);
            // Here you can upload the file to your server or process it
        }
    };
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
                {/* <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#050412' }}>
                </div> */}
            </div>
            <div className="flex justify-end items-center min-h-screen p-4">
                <Card className="w-full max-w-lg text-white bg-[#070618]">
                    {/* bg-transparent */}
                    <CardHeader className="text-center">
                        <CardTitle className="text-white">Hesab Yarat</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col md:flex-row mb-4 gap-2">
                                <div className="space-y-2 w-full md:w-1/2">
                                    <Label className="text-white" htmlFor="firstName">Ad</Label>
                                    <Input id="firstName" className="h-12" placeholder="Adınızı daxil edin" />
                                </div>
                                <div className="space-y-2 w-full md:w-1/2">
                                    <Label className="text-white" htmlFor="lastName">Soyad</Label>
                                    <Input id="lastName" className="h-12" placeholder="Soyadınızı daxil edin" />
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <Label className="text-white" htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" className="h-12" placeholder="E-poçt ünvanı daxil edin" />
                            </div>

                            <div className="space-y-2 mb-4">
                                <Label className="text-white" htmlFor="password">Şifrə</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"} className="h-12" placeholder="Şifrənizi daxil edin"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} className="text-white" /> : <Eye className="text-white" size={18} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500">
                                    8 və ya daha çox karakter, simvoldan istifadə edin
                                </p>
                                <Label className="text-white" htmlFor="password">Şifrə təkrar daxil edin</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"} className="h-12" placeholder="Şifrənizi təkrar daxil edin"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} className="text-white" /> : <Eye className="text-white" size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row">
                                <div className=" space-y-2 mb-6 w-full lg:w-9/12">
                                    <Label htmlFor="phone"><p className="text-white">Nömrə</p></Label>
                                    <CustomPhoneInput />
                                    <Label className="text-white" htmlFor="workplace">İş Yeri</Label>
                                    <Input id="workplace" className="h-12" placeholder="İş yerinizi daxil edin" />
                                </div>
                                <div className="w-full lg:w-3/12 text-white">
                                    <FileUpload
                                        onFileChange={handleFileChange}
                                        minSizeInMB={2.3}
                                        acceptedFormats={['image/jpeg', 'image/png']}
                                    />
                                </div>
                            </div>


                            <div className="flex items-start space-x-2 mb-6 mt-4">
                                <div>
                                    <Checkbox id="terms" />
                                </div>
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none text-white"
                                    >
                                        Hesabla yaratmaqla Sizin{" "}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            İstifadə şərtləri
                                        </a>{" "}
                                        və{" "}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Gizlilik Siyasəti
                                        </a>{" "}
                                        şərtlərlə razısınızam
                                    </label>
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                                Daxil ol
                            </Button>

                            <div className="text-center mt-4">
                                <p className="text-sm text-white">Hesabın var? <Link to={"/login"} className='hover:underline'>Daxil ol</Link></p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Register;