export const titleAnimation = {
	hidden: {
		x: 100,
		opacity: 0
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.4,
			duration: 0.6
		}
	}
}
export const titleAnimation2 = {
	hidden: {
		x: -100,
		opacity: 0
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.4,
			duration: 0.6
		}
	}
}

export const yAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			delay:0.2
		},
	}
}
export const yAnimation3 = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			delay:0.2
		},
	}
}

export const yCustomAnimation = {
	hidden: {
		y: 100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			duration: 1
		}
	})
}
export const xCustomAnimation = {
	hidden: {
		x: -100,
		opacity: 0
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			duration: 1
		}
	})
}
export const xCustomAnimation2 = {
	hidden: {
		x: 100,
		opacity: 0
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			duration: 1
		}
	})
}

export const yAnimation2 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 2,
			delay:2
		},
	}
}