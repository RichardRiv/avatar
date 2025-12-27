import { useState, useRef } from 'react';

const Card = ({ children, gradient }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const cardRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;

		const card = cardRef.current;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const tiltX = ((y - centerY) / centerY) * -15;
		const tiltY = ((x - centerX) / centerX) * 15;

		setTilt({ x: tiltX, y: tiltY });
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setTilt({ x: 0, y: 0 });
	};

	return (
		<div
			ref={cardRef}
			style={{
				width: '100px',
				cursor: 'pointer',
				transition: 'transform 0.1s ease',
				transform: isHovered
					? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px) scale(1.05)`
					: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
				transformStyle: 'preserve-3d',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div
				style={{
					width: '100%',
					aspectRatio: '3/4',
					borderRadius: '8px',
					overflow: 'hidden',
					background: gradient,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					boxShadow: isHovered
						? '0 10px 30px rgba(0, 0, 0, 0.5)'
						: '0 2px 8px rgba(0, 0, 0, 0.4)',
					transition: 'box-shadow 0.2s ease',
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Card;
