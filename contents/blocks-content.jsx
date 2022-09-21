import InputRatesScale from '../component/input-rate-scale';
import InputCheckbox from '../component/input-checkbox';
import InputSwitch from '../component/input-switch';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Block from '../component/modular/block';
import BlockBody from '../component/modular/block-body';

import styles from '../styles/HomeContent.module.css';
import Toolset from '../component/toolset';
import Link from 'next/dist/client/link';
import CommentDraft from '../component/comment-draft';

const BlocksContent = () => {
  const [testVal, setTestVal] = useState(false);

  let tempStyle = {
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    // justifyItems: 'start',
    alignItems: 'start',
    padding: '1.25rem',
    // width: '200px',
    // height: '42px',
    border: '1px dashed grey',
  };
  let tempStyle2 = {
    // display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'start',
    justifyItems: 'start',
    // alignItems: 'start',
    padding: '1.25rem',
    // width: '200px',
    // height: '42px',
    border: '1px dashed grey',
  };

  return (
    <div>
      <div className="_grid-row _gap-12" style={tempStyle}>
        <Block>
          <BlockBody>
            <div className="_grid-2col-fix-left _align-center">
              <div className="_circle"></div>
              <div
                style={{
                  height: '15px',
                  width: '80px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
            </div>
            <div
              style={{
                height: '32px',
                width: '320px',
                marginTop: '12px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
          </BlockBody>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '80px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: '15px',
                  width: '320px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
              <div
                style={{
                  height: '15px',
                  width: '90px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
            </div>
          </BlockBody>
        </Block>

        {/* <Block style={{ display: 'inline-grid' }}> */}
        <Block>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '80px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
            </div>
          </BlockBody>
        </Block>
        <Block>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '140px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
            </div>
          </BlockBody>
        </Block>
      </div>
      {/* ===== ========== */}
      <div className="_grid-row _gap-12" style={tempStyle2}>
        <Block>
          <BlockBody>
            <div className="_grid-2col-fix-left _align-center">
              <div className="_circle"></div>
              <div
                style={{
                  height: '15px',
                  width: '80px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
            </div>
            <div
              style={{
                height: '32px',
                width: '320px',
                marginTop: '12px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
          </BlockBody>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '80px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: '15px',
                  width: '320px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
              <div
                style={{
                  height: '15px',
                  width: '90px',
                  background: 'var(--color-secondary)',
                  borderRadius: '3px',
                }}
              ></div>
            </div>
          </BlockBody>
        </Block>

        {/* <Block style={{ display: 'inline-grid' }}> */}
        <Block>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '80px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
            </div>
          </BlockBody>
        </Block>
        <Block>
          <BlockBody>
            <div className="_grid-row _gap-8">
              <div className="_grid-2col-fix-left _align-center">
                <div className="_circle"></div>
                <div
                  style={{
                    height: '15px',
                    width: '140px',
                    background: 'var(--color-secondary)',
                    borderRadius: '3px',
                  }}
                ></div>
              </div>
            </div>
          </BlockBody>
        </Block>
      </div>
    </div>
  );
};

export default BlocksContent;
