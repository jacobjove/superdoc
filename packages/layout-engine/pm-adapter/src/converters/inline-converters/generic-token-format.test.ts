import { describe, expect, it } from 'vitest';
import type { PMNode, PositionMap } from '../../types.js';
import { tokenNodeToRun } from './generic-token.js';

describe('generic tokenNodeToRun field formatting', () => {
  it('forwards normalized page-number field format metadata', () => {
    const node: PMNode = {
      type: 'total-page-number',
      attrs: {
        pageNumberFormat: 'decimal',
        pageNumberZeroPadding: 2,
      },
    };

    const run = tokenNodeToRun({
      node,
      positions: new WeakMap() as PositionMap,
      inheritedMarks: [],
      defaultFont: 'Arial',
      defaultSize: 16,
      sdtMetadata: undefined,
      hyperlinkConfig: { enableRichHyperlinks: false },
      themeColors: undefined,
      runProperties: undefined,
      paragraphProperties: undefined,
      converterContext: {
        translatedNumbering: {},
        translatedLinkedStyles: {},
      },
      enableComments: true,
      visitNode: () => {},
      bookmarks: undefined,
      tabOrdinal: 0,
      paragraphAttrs: {},
      nextBlockId: () => 'b1',
    });

    expect(run?.pageNumberFieldFormat).toEqual({ format: 'decimal', zeroPadding: 2 });
  });
});
