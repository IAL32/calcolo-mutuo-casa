const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon_128x128.ico","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.480e5752.js","app":"_app/immutable/entry/app.8336085b.js","imports":["_app/immutable/entry/start.480e5752.js","_app/immutable/chunks/index.f487fb56.js","_app/immutable/chunks/singletons.15b38b3a.js","_app/immutable/chunks/index.06854f7c.js","_app/immutable/entry/app.8336085b.js","_app/immutable/chunks/index.f487fb56.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-a718d3a6.js'),
			() => import('./chunks/1-e5e8bfb6.js'),
			() => import('./chunks/2-b31db8d6.js'),
			() => import('./chunks/3-ba2bedb4.js'),
			() => import('./chunks/4-a2b4d429.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/generate",
				pattern: /^\/generate\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4969f8ea.js')
			},
			{
				id: "/piano-di-ammortamento",
				pattern: /^\/piano-di-ammortamento\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
