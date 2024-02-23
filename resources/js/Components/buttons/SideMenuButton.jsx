import style from '@/styles';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function SideMenuButton({ name, link, isOpen = true, isActive = false, children, className }) {
    return (
        <a
            href={link}
            className={`
                flex justify-start items-center px-5 py-3 rounded-lg transition-all group  ${
                    isActive ? 'bg-primary hover:bg-primary-500 active:bg-primary-600' : 'border-2 border-transparent hover:border-white'
                }
                ${className || ''} // Tambahkan atau "" jika className tidak ada
            `}
        >
            {children} {/* Menampilkan children di dalam komponen */}
            {isOpen && <p className={`${style.bodyHeavy} text-white ml-4`}>{name}</p>}
        </a>
    );
}
