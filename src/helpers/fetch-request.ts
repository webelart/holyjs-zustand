
export async function fetchRequest<T>(url: string): Promise<T> {
    const response = await window.fetch(url);
    const jsonData = await response.json();

    return jsonData;
}