
import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AboutAuthorMessage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);
    const [showAudio, setShowAudio] = useState(false);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !muted;
            setMuted(!muted);
        }
    };

    return (
        <section className="bg-white px-8 py-24 md:px-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

                {/* Left: video */}
                <div
                    className="relative overflow-hidden rounded-3xl bg-gray-900"
                    onMouseEnter={() => setShowAudio(true)}
                    onMouseLeave={() => setShowAudio(false)}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="aspect-[4/3] w-full object-cover"
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                    />
                    <button
                        onClick={toggleMute}
                        className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0A1945] shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white ${
                            showAudio ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                </div>

                {/* Right: quote */}
                <div>
                    {/* quotation SVG icon — 173×138, opacity 1 */}
                    <svg
                        width="173"
                        height="138"
                        viewBox="0 0 173 138"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ opacity: 1, transform: 'rotate(0deg)' }}
                        className="mb-8"
                    >
                        <path
                            d="M34.6 103.5H0V69H34.6V103.5ZM34.6 138H0V103.5H34.6V138ZM69.2 138H34.6V103.5H69.2V138ZM34.6 69H0V34.5H34.6V69ZM69.2 34.5H34.6V0H69.2V34.5ZM69.2 103.5H34.6V69H69.2V103.5ZM138.4 103.5H103.8V69H138.4V103.5ZM138.4 138H103.8V103.5H138.4V138ZM173 138H138.4V103.5H173V138ZM138.4 69H103.8V34.5H138.4V69ZM173 34.5H138.4V0H173V34.5ZM173 103.5H138.4V69H173V103.5Z"
                            fill="#F6F5F8"
                        />
                    </svg>

                    <h2
                        className="mb-6 text-[#0A1945]"
                        style={{
                            fontFamily: 'SF Pro, sans-serif',
                            fontWeight: 700,
                            fontSize: '48px',
                            lineHeight: '120%',
                            letterSpacing: '0%',
                        }}
                    >
                        Founder's Message
                    </h2>

                    <p
                        className="mb-8 text-[#0A1945]"
                        style={{
                            fontFamily: 'SF Pro, sans-serif',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '150%',
                        }}
                    >
                        We focus on creating solutions that are clear, functional, and scalable.
                        <br />
                        Our goal is simple — to help businesses grow through reliable engineering and thoughtful design.
                    </p>

                    <div>
                        <div
                            style={{
                                fontFamily: 'SF Pro, sans-serif',
                                fontWeight: 510,
                                fontSize: '20px',
                                lineHeight: '120%',
                                letterSpacing: '0%',
                                color: '#85A6FF',
                            }}
                        >
                            Oleksandr Chumak
                        </div>
                        <div
                            className="mt-1 text-gray-500"
                            style={{ fontFamily: 'SF Pro, sans-serif', fontSize: '14px' }}
                        >
                            Founder & CEO WHA
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}