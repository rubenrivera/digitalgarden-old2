module.exports = {
    eleventyComputed: {
        outputDir: (data) => data.eleventy.serverlesscl ? "tmp" : "dist",
    }
}