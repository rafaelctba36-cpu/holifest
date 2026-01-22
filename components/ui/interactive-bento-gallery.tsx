
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 w-full h-full z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full md:max-w-5xl aspect-[4/3] md:aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="w-full h-full relative">
                            <MediaItem item={selectedItem} className="w-full h-full object-contain" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-6 md:p-8">
                                <h3 className="text-white font-alfa text-xl md:text-3xl mb-1 md:mb-2">{selectedItem.title}</h3>
                                <p className="text-white/80 font-inter text-xs md:text-base">{selectedItem.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const InteractiveBentoGallery = ({ mediaItems, title, description }: { mediaItems: MediaItemType[], title: string, description: string }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 md:mb-12 text-center md:text-left">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-alfa text-4xl md:text-7xl text-black mb-2 md:mb-4 uppercase"
                >
                    {title}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-inter text-sm md:text-lg text-black/70 max-w-2xl mx-auto md:mx-0"
                >
                    {description}
                </motion.p>
            </div>

            {/* Ajustado auto-rows para 180px em mobile para não ficar muito alto em telas pequenas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-4 md:gap-6">
                {mediaItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        className={`relative group rounded-3xl overflow-hidden cursor-pointer ${item.span}`}
                        onClick={() => setSelectedItem(item)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className="w-full h-full relative">
                            <MediaItem item={item} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                            
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-alfa text-base md:text-xl uppercase tracking-wide drop-shadow-lg opacity-90 group-hover:opacity-100">{item.title}</h3>
                                <div className="h-0.5 w-0 group-hover:w-full bg-pink-500 transition-all duration-500 mt-2 rounded-full"></div>
                            </div>

                            {item.type === 'video' && (
                                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                    <div className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-white border-t-[4px] md:border-t-[5px] border-t-transparent border-b-[4px] md:border-b-[5px] border-b-transparent ml-0.5"></div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <GalleryModal
                selectedItem={selectedItem!}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                setSelectedItem={setSelectedItem}
                mediaItems={mediaItems}
            />
        </div>
    );
};

export default InteractiveBentoGallery;
