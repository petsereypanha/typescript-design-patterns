import {test, expect} from "vitest";
import {EmptyQueryBuilder,QueryBuilder,SearchService} from "./Aggregations";

test("Empty test", () => {
    const searchService = new SearchService({
        qb: new EmptyQueryBuilder(), path: "test" });
    expect(searchService.queryBuilder).toBeInstanceOf(QueryBuilder);
    expect(searchService.path).toBe("test");
    expect(searchService.queryBuilder).toBeInstanceOf(EmptyQueryBuilder);
})