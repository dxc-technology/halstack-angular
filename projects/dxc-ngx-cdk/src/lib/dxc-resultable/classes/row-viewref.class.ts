import { EmbeddedViewRef } from "@angular/core";
import { RowContext } from "../interfaces/row-context.interface";

/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
export abstract class RowViewRef<T> extends EmbeddedViewRef<RowContext<T>> {}
