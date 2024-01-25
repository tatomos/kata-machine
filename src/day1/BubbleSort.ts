export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (arr[j] > arr[i]) {
                const tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
}