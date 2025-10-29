import React from "react";

export default function Corporate() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative h-[20vh] flex items-center justify-center overflow-hidden mb-4">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image 180.png')",
                    }}
                >
                    {/* <div className="absolute inset-0 bg-black/40"></div> */}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1
                        className="font-bold"
                        style={{
                            fontFamily: "Poltawski Nowy, serif",
                            fontWeight: 700,
                            fontSize: "100px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            WebkitTextStroke: "1px #76CD61", // ✅ Green border on text
                            textStroke: "3px #76CD61",       // Fallback for non-WebKit
                            letterSpacing: "0",
                            textShadow: "0 0 20px rgba(118, 205, 97, 0.5)", // optional glow
                        }}
                    >
                        Corporate
                    </h1>
                </div>

            </section>

            <section className="relative h-[20vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/Rectangle 7358.png')",
                    }}
                >
                    {/* <div className="absolute inset-0 bg-black/40"></div> */}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto italic"
                        style={{
                            fontFamily: "Poltawski Nowy",
                            fontWeight: 500,
                            fontSize: "23px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            letterSpacing: "0",
                        }}
                    >
                        At ClinXcel, we are a dedicated team of industry and training experts
                        with over 20 years of experience in the clinical research domain.
                        Our mission is to build a highly skilled workforce that can meet the
                        growing demands of the life sciences and healthcare industries. We
                        have successfully trained more than 3,000 students, equipping them
                        with practical, industry-relevant knowledge and skills.
                    </p>
                </div>
            </section>

            {/* Popular Services Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="mb-10 flex justify-start">
                        <div
                            className="relative flex items-center justify-center rounded-[40px] shadow-md py-6"
                            style={{
                                background: "linear-gradient(100deg, #72CB63 50%, #77C2C3 50%)",
                                width: "550px",
                                height: "100px",
                            }}
                        >
                            <h2
                                className="text-6xl italic font-semibold"
                                style={{
                                    color: "#000000",
                                    fontFamily: "Poltawski Nowy, serif",
                                    fontWeight: 700,
                                    lineHeight: "100%",
                                }}
                            >
                                <span className="font-extrabold">Popular</span> Services
                            </h2>
                        </div>
                    </div>


                    {/* Service Card */}
                    <div
                        className="relative text-white shadow-lg"
                        style={{
                            backgroundColor: "#000000CC",
                            width: "536.9px",
                            height: "400px",
                            borderRadius: "50.15px",
                            opacity: 1,
                        }}
                    >
                        {/* Course Duration Tag */}
                        {/* Duration Tag */}
                        <div className="absolute top-[1px] -right-[1px] flex flex-col items-center">
                            <div
                                className="relative flex items-center justify-center font-semibold text-white"
                                style={{
                                    width: "70px",
                                    height: "160px",
                                    backgroundColor: "#000000",
                                    border: "5px solid #FFFFFF",
                                    borderRadius: "49.6px",
                                    writingMode: "vertical-rl",
                                    textOrientation: "upright",
                                    fontSize: "18px",
                                    opacity: 1,
                                }}
                            >
                                <span className="tracking-tight">1year</span>

                                {/* Green Accent Bar */}
                                <div
                                    className="absolute right-0 h-20 bg-[#72CB63]"
                                    style={{
                                        width: "10px",
                                        borderTopRightRadius: "49.6px",
                                        borderBottomRightRadius: "49.6px",
                                    }}
                                ></div>
                            </div>
                        </div>


                        {/* Image Section */}
                        <div className="px-5 pt-5">
                            <img
                                src="/training.png"
                                alt="Training"
                                className="w-[400px] h-[220px] object-cover rounded-[30px]"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="px-6 pt-4">
                            <h3
                                style={{
                                    color: "#6AB365",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "30px",
                                    lineHeight: "35px",
                                }}
                            >
                                Empower Teams With ClinXcel’s Industry-Ready Training
                            </h3>


                            <p
                                style={{
                                    color: "#FFFFFF",
                                    fontFamily: "Poltawski Nowy",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                    fontSize: "20px",
                                    lineHeight: "100%",
                                    textAlign: "justify",
                                }}
                            >
                                Eligibility: Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences, Medical, Dental Sciences.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
