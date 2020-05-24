export interface svgAttributes {
    fill?: string,
    stroke?: string
}

export interface svgMetrics {
    x: number,
    y: number,
    baseline: number,
    width: number,
    height: number,
    ascender: number,
    descender: number
}

export interface svgOptions {
    x?: number,
    y?: number,
    fontSize?: number,
    kerning?: boolean,
    letterSpacing?: string,
    tracking?: number,
    anchor?: string,
    attributes?: svgAttributes
}

export interface TextToSVG {
    getMetrics: (text: string, options: svgOptions) => svgMetrics,
    getSVG: (text: string, options: svgOptions) => string
}