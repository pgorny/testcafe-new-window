import { Selector } from 'testcafe'

fixture`Links`
  .page`http://localhost:3000/page1`

test('Internal new window link', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})


test('Internal new window link (wait 500)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(500)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})



test('Internal new window link (wait 1000)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(1000)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 1500)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(1500)

    // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 2000)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(2000)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 2500)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(2500)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 3000)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(3000)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 3500)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(3500)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 4000)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(4000)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 4500)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(4500)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
  

test('Internal new window link (wait 5000)', async t => {
  await t
    .click(Selector('#new-window-internal-link[target="_blank"]'))
    .wait(5000)

  // Verify the context switched to the new window
  await t
    .expect(Selector('#loremipsum').exists).ok()
    .closeWindow()
})
