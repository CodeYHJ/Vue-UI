import path from 'path'
const scopeRegex = /^\/@com\/(\w+)\//

export const myResolver = {
    requestToFile(req) {
        const match = req.match(scopeRegex)
        console.log(req,'33333')
        if (match) {
            const pkg = match[1]
            return path.resolve(__dirname, 'components', pkg, req.replace(scopeRegex, ''))
            // return path.resolve(__dirname, 'lib', pkg, 'src', req.replace(scopeRegex, ''))
        }
    },
    fileToRequest(file) {
        // reverse logic
    }
}