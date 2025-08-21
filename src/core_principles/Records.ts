type UsageStats = { free: number; used: number; size: number }

type Metric = { name: string; totalFree: number; totalUsed: number; totalSize: number }

export function stats<T extends Metric[]>(data: T): Record<string, UsageStats> {
    const stats: Record<string, UsageStats> = {}

    data.forEach((item) => {
        const name = item.name
        stats[name] = { free: item.totalFree, used: item.totalUsed, size: item.totalSize }
    })

    return stats
}
