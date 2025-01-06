export async function getExploreData() {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function getLiveData() {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function getSearchData() {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
