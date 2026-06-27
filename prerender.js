import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function run() {
  const templatePath = path.resolve(__dirname, 'dist/index.html')
  let template = fs.readFileSync(templatePath, 'utf-8')

  const ssrModulePath = path.resolve(__dirname, 'dist/ssr/entry-server.js')
  
  if (!fs.existsSync(ssrModulePath)) {
    throw new Error(`SSR build file not found at ${ssrModulePath}`)
  }

  // Prepend file:// for Windows-compatibility of dynamic imports
  const { render } = await import(`file://${ssrModulePath}`)
  const appHtml = render()

  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  fs.writeFileSync(templatePath, finalHtml)
  console.log('Prerendered index.html successfully!')

  // Clean up temporary SSR build directory
  fs.rmSync(path.resolve(__dirname, 'dist/ssr'), { recursive: true, force: true })
}

run().catch((err) => {
  console.error('Prerendering failed:', err)
  process.exit(1)
})
