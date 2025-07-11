// type LoadingSpinnerProps = {
//     size?: 'small' | 'medium' | 'large';
//     color?: 'blue' | 'red' | 'green' | 'purple' | 'gray';
//     text?: string;
// };

// const LoadingSpinner = ({ size = 'medium', color = 'blue', text = 'Loading...' }: LoadingSpinnerProps) => {
//     // Define sizes
//     const sizes = {
//         small: 'h-8 w-8',
//         medium: 'h-16 w-16',
//         large: 'h-24 w-24'
//     };

//     // Define colors
//     const colors = {
//         blue: 'border-blue-500',
//         red: 'border-red-500',
//         green: 'border-green-500',
//         purple: 'border-purple-500',
//         gray: 'border-gray-500'
//     };

//     return (
//         <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
//             <div className={`animate-spin rounded-full ${sizes[size]} border-t-4 border-b-4 ${colors[color]}`}></div>
//             {text && <p className="mt-4 text-gray-700 font-medium">{text}</p>}
//         </div>
//     );
// };

// export default LoadingSpinner;