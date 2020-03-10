export const useFullscreen = callback => {
	const element = useRef();
	const rubCb = isFull => {
		if (callback && typeof callback === "function") {
			callback(isFull);
		}
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullScreen) {
				element.current.webkitRequestFullScreen();
			} else if (element.current.msRequestFullScreen) {
				element.current.msRequestFullScreen();
			}
			rubCb(true);
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullScreen) {
			document.webkitExitFullScreen();
		} else if (document.msExitFullScreen) {
			document.msExitFullScreen();
		}
		rubCb(false);
	};
	return { element, triggerFull, exitFull };
};
